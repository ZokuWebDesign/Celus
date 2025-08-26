interface FeatureItemProps {
  text: string;
  iconSvg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const FeatureItem = ({ text, iconSvg: IconComponent }: FeatureItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <IconComponent className="w-6 h-6" />
      <p className="text-base leading-[24px]">{text}</p>
    </li>
  );
};

export default FeatureItem; 