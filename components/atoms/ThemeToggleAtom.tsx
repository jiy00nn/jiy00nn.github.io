import Image from "next/image";

const ThemeToggle: React.FC = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className="checkbox-label">
        <Image src="/toggle/sun.svg" alt="Light Mode" width={10} height={10} />
        <Image src="/toggle/moon.svg" alt="Dark Mode" width={10} height={10} />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
