export const ImageCard = ({ param: { alt_description, urls }, onClick  }) => {
  return (
    <div>
      <img src={urls.small} alt={alt_description} onClick={() => onClick({ alt_description, urls })} />
    </div>
  );
};
