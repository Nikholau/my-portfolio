import { useEffect, useState } from 'react'
import GitHubService from '../../services/api'
import { userNameProps } from '../../types'

export const UserImage = ({ username }: userNameProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserAvatar = async () => {
      if (!username) return
      const user = await GitHubService.getUser(username)
      setAvatarUrl(user?.avatar_url)
    }

    fetchUserAvatar()
  }, [username])

  return (
    <div className="flex items-center justify-center h-64 mt-10">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="rounded-full h-60 w-60 object-cover"
        />
      ) : (
        <div className="bg-gray-500 rounded-full h-20 w-20"></div>
      )}
    </div>
  )
}
