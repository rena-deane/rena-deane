import React from 'react';
import Next from '../PrevNext/NextButton';
import ProgressBar from '../ProgressBar';
import styles from './Footer.css';

const footer = ({ isHidden }) => (
	<div>
		{ isHidden() ? null :
	  <div className={styles.footer}>
	    <div className={`col-xs-6 ${styles.progressContainer}`}><ProgressBar />
	    </div>
	    <div className={styles.buttonContainer}><Next styles={styles.nextButton} />
    	</div>
		</div>
		}
  </div>
);

footer.propTypes = { isHidden: React.PropTypes.func };

export default footer;
