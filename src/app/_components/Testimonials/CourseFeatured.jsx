const coursesData = [
  {
    id: 1,
    tag: "HEAVY-DUTY",
    title: "Alta Capacidade de Carga",
    level: "Robusta",
    numClasses: "Versátil",
    tag2: "DURÁVEL",
  },
  {
    id: 2,
    tag: "SAFE",
    title: "Operação 100% Segura",
    level: "Precisa",
    numClasses: "Eficiente",
    tag2: "SEGURANÇA",
  },
  {
    id: 3,
    tag: "EFFICIENT",
    title: "Eficiência Operacional",
    level: "Ágil",
    numClasses: "Flexível",
    tag2: "EFICIÊNCIA",
  },
  {
    id: 4,
    tag: "DURABLE",
    title: "Durabilidade com Alta Performance",
    level: "Confiável",
    numClasses: "Estável",
    tag2: "CONFIÁVEL",
  },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={course.id}>
          <a
            href="#"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase">
              {course.tag}
            </span>
            <h4 className="mb-0 mt-25">{course.title}</h4>
            <ul className="style-none pb-40 lg-pb-20 d-flex flex-column justify-content-between">
              <li>{course.level}</li>
              <li>{course.numClasses}</li>
            </ul>
            <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {course.tag2}
            </span>
          </a>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
