import Image from 'next/image';

const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={title} width={20} height={20} /> {title}
    </a>
  </li>
);

export default SocialMediaItem;
