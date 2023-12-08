import { useEffect, useState } from 'react'
import GitHubService from '../../services/api'
import { userNameProps } from '../../types'

export const UserProfile = ({ username }: userNameProps) => {
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
    <div className="text-black flex justify-center flex-col items-center mb-4 mt-6 text-center">
      <p className="text-3xl font-bold  text-black ">{userData.name}</p>
      <p className="mb-4 text-2xl w-3/5">{userData.bio}</p>

      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div>
          <p className="text-lg">
            <strong className="text-black text-xl">Empresa:</strong>{' '}
            {userData.company}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <strong className="text-black text-xl">Localização:</strong>{' '}
            {userData.location}
          </p>
        </div>
      </div>
    </div>
  )
}
