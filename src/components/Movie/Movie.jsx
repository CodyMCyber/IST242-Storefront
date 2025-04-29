import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import styles from "./Movie.module.css";

export default function Movie() {
  return (
    <Container fluid className='border m-0'>
      <div>
        <div className={styles.movie}>
          <div className={styles.movie_title}>
            Movie Title: The Batman
          </div>
          <div className={styles.movie_director}>
            Director: Matt Reeves
          </div>
          <div className={styles.movie_stars}>
            Stars: Robert Pattinson, Zoë Kravitz
          </div>
        </div>
      </div>
    </Container>
  )
}