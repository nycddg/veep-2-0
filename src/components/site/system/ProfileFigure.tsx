export function ProfileFigure({
  name,
  role,
  credential,
  photoUrl,
  photoPosition = "center 65%",
}: {
  name: string;
  role: string;
  credential: string;
  photoUrl: string;
  photoPosition?: string;
}) {
  return (
    <figure className="v-profile">
      <img
        src={photoUrl}
        alt=""
        width={1152}
        height={1440}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: photoPosition }}
      />
      <figcaption>
        <h3>{name}</h3>
        <p className="v-profile-role">{role}</p>
        <p>{credential}</p>
      </figcaption>
    </figure>
  );
}
