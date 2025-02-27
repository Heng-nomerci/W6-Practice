export default function Place({ places }) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={places.image.src} alt={places.image.alt} />
        <h3>{places.title}</h3>
      </button>
    </li>
  );
}
