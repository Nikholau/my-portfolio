import { Card } from '../../components/Card'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'

interface UserContactsProps {
  linkendinUrl: string
  githubUrl: string
  whatsappNumber: string
}

export const UserContacts = ({
  linkendinUrl,
  githubUrl,
  whatsappNumber
}: UserContactsProps) => {
  return (
    <section className="flex flex-col min-w-300 items-center">
      <h3 className="text-black text-xl">Contatos</h3>
      <Card className="gap-2 items-center hover:bg-blue-400">
        <FaLinkedinIn />
        <h1>
          <a
            href={`https://www.linkedin.com/in/${linkendinUrl}`}
            target="blank"
          >
            Linkedin
          </a>
        </h1>
      </Card>
      <Card className="gap-2 items-center hover:bg-gray-800">
        <FaGithub />
        <a href={`https://github.com/${githubUrl}`} target="blank">
          <h1>Github</h1>
        </a>
      </Card>
      <Card className="gap-2 items-center hover:bg-green-600">
        <FaWhatsapp />
        <a href={`https://wa.me/${whatsappNumber}`} target="blank">
          <h1>Contate-me</h1>
        </a>
      </Card>
    </section>
  )
}
