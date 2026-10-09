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
      <div className="v-profile-image">
        <img
          src={photoUrl}
          alt=""
          width={1152}
          height={1440}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: photoPosition }}
        />
      </div>
      <figcaption>
        <div className="v-profile-identity">
          <h3>{name}</h3>
          <p className="v-profile-role">{role.replace("Operating Partner", "").trim()}</p>
        </div>
        <p>{credential}</p>
      </figcaption>
    </figure>
  );
}
