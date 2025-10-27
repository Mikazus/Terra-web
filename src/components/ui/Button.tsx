import { Link } from 'react-router-dom'

type ButtonProps = {
  href: string;
  variant: 'solid' | 'outline';
  children: React.ReactNode;
  isFullWidth?: boolean;
};

const Button = ({ href, variant, children, isFullWidth = false }: ButtonProps) => {
  const baseClasses = "inline-block px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 text-center";
  
  const variantClasses = {
    solid: "bg-brand-green-light text-brand-green-dark hover:bg-opacity-80 shadow-md",
    outline: "bg-transparent border-2 border-brand-green-light text-brand-green-light hover:bg-brand-green-light hover:text-brand-green-dark"
  };

  const widthClass = isFullWidth ? 'w-full' : 'w-auto';

  return (
    <Link to={href} className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}>
      {children}
    </Link>
  )
}

export default Button