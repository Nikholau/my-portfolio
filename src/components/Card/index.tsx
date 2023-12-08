import { twMerge } from 'tailwind-merge'

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={twMerge(
      'bg-gray-200 p-4 m-4 text-gray-500 rounded-md hover:text-white hover:bg-gray-400 hover:transition-colors w-full flex justify-center',
      className
    )}
  >
    {children}
  </div>
)
