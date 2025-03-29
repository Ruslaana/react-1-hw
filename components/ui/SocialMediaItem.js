const SocialMediaItem = ({ url, title, Icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon size={20} /> {title}
    </a>
  </li>
);

export default SocialMediaItem;
