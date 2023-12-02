import { UserProfile } from '../../components/Title'
import { UserContacts } from '../../components/UserContacts'
import { UserImage } from '../../components/UserImage'

interface HomeProps {
  username: string
}

const linkedinUrl = '/nikholasqueiroz/'
const githubUrl = 'Nikholau'
const whatsappNumber = '5531988514442'

export const Home = ({ username }: HomeProps) => {
  return (
    <div className="flex items-center flex-col h-screen overflow-auto">
      <UserImage username={username} />
      <UserProfile username={username} />
      <UserContacts
        githubUrl={githubUrl}
        linkendinUrl={linkedinUrl}
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
