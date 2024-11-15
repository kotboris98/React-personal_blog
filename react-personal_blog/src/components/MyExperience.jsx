export default function MyExperience({title, description}) {
    return (
      <li>
        <p>
          <strong>{title}</strong>
        </p>
        <div>
          {description}
        </div>
      </li>
    )
  }