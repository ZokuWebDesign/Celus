interface FeatureItemProps {
  highlight: string;
  text: string;
  icon: string;
}

const FeatureItem = ({ highlight, text, icon }: FeatureItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <img src={icon} alt="Ícone" className="w-6 h-6" />
      <p className="text-[18px] leading-[24px]"><span className="text-secondary font-semibold">{highlight}</span>{text}</p>
    </li>
  );
};

export default FeatureItem; 