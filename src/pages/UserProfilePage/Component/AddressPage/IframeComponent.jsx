const IFrameComponent = () => {
  return (
    <div className="IFrameContainer">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "0px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59151.21977206016!2d79.08205585569944!3d21.145800731880384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3c0e6e4b2f5d7%3A0xf9c40d0e14a48f8e!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622093723665!5m2!1sen!2sin"
        allowFullScreen
      />
    </div>
  );
};

export default IFrameComponent;
