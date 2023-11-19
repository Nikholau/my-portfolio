import { useEffect, useState } from 'react'
import GitHubService from '../../services/api'

interface UserProfileProps {
  username: string
}

export const UserProfile = ({ username }: UserProfileProps) => {
  const [userData, setUserData] = useState({
    name: '',
    bio: 'Biografia não disponível',
    company: 'Informação não disponível',
    publicRepos: 0,
    location: 'Informação não disponível'
  })

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await GitHubService.getUser(username)
      if (!user) return
      setUserData({
        name: user.name ?? 'Nome não disponível',
        bio: user.bio ?? 'Biografia não disponível',
        company: user.company ?? 'Informação não disponível',
        publicRepos: user.publicRepos ?? 0,
        location: user.location ?? 'Informação não disponível'
      })
    }

    fetchUserData()
  }, [username])

  return (
    <div className="text-black flex justify-center flex-col items-center mb-4 mt-6">
      <p className="text-xl font-bold  text-black ">{userData.name}</p>
          <p className='mb-6'>
            <strong className="text-black "></strong> {userData.bio}
          </p>
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div>
          <p>
            <strong className="text-black">Empresa:</strong> {userData.company}
          </p>
        </div>
        <div>
          <p>
            <strong className="text-black">Localização:</strong>{' '}
            {userData.location}
          </p>
        </div>
      </div>
    </div>
  )
}
