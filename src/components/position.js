/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

import Candidate from "./candidate";

const Position = ({ title, candidates }) => {
  return (
    <div className="position">
      <h2 className="position-title">{title}</h2>
      <div className="candidates">
        {candidates.map((candidate) => (
          <Candidate candidateData={candidate} />
        ))}
      </div>
    </div>
  )
};

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default Position
