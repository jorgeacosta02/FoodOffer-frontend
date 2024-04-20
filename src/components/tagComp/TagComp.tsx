import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./_TagComp.module.scss";

function TagComp(props: { data: { check: boolean, description: string } }) {
    const { check, description } = props.data;

    const tagClass = check ? 'check-tag' : 'unCheck-tag';

  return (
    <>
        <span className={styles[tagClass]}>
          <FontAwesomeIcon className={styles.tag_icon} icon={ check ? faCircleCheck : faTimesCircle} />{description}
        </span>
    </>
  );
}

export default TagComp;
