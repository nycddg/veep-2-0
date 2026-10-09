export function ProfileFigure({
  name,
  role,
  priorCompanies,
  credential,
  photoUrl,
  photoPosition = "center 65%",
}: {
  name: string;
  role: string;
  priorCompanies: string[];
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
        <p className="v-profile-companies">{priorCompanies.slice(0, 3).join(" · ")}</p>
        <p>{credential}</p>
      </figcaption>
    </figure>
  );
}
