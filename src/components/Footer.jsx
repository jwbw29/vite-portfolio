import "../styles/Footer.css";

const dateUpdated = "02-13-2024";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Last Updated: <span id="dateUpdated">{dateUpdated}</span>{" "}
      </p>
    </div>
  );
}
