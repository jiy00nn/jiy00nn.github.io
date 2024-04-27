import Image from 'next/image'

const ThemeToggle: React.FC = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className="checkbox-label">
        <span className="ball"></span>
      </label>
    </div>
  )
}

export default ThemeToggle
