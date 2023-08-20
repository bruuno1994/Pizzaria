import './button.css'
interface ButtonProps {
  color: string,
  title: string
}

export const Button = ({color, title}: ButtonProps) => {
  return (
    <div>
      <button style={{background: color}} className="btn">
          {title}
        </button>
    </div>
  )
}