/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const { state } = useNavigation();
  const isSubmitting = state.isSubmitting;
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <span className="loading loading-spinner loading-sm"></span>
          SENDING...
        </span>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
