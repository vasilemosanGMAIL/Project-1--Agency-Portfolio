const AboutPost = ({ post }) => {
  return (
    <li className={post.class}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={post.imgSrc} alt="..." />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{post.time}</h4>
          <h4 className="subheading">{post.title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{post.subtitle}</p>
        </div>
      </div>
    </li>
  );
};

export default AboutPost;
