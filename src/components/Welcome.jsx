import { Alert } from "react-bootstrap";
const Welcome = function () {
  return (
    <Alert variant="primary">
      <h2 className="text-danger text-center fw-bold">
        Benvenuti nel sito di Epibooks
      </h2>
      <p>
        In questo sito avrai la possibilità di cercare e consultare i libri di diverse categorie prima di poterli acquistare!
      </p>
      <hr />
      <p className="mb-0 fw-bold">
        &quot;Un buon libro ben scelto ti salva da qualsiasi cosa, anche da te stesso.&quot;
      </p>
    </Alert>
  );
};
export default Welcome;
