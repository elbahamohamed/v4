import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 990px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const certif = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="certif" ref={revealContainer}>
      <h2 className="numbered-heading">Certifications</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              <a href="https://mohamedelbaha.github.io/art/DLspecialization.pdf">
                Deep Learning Specialization
              </a>
              ,
              <i>
                {' '}
                5 courses : Convolutional Neural Networks, Structuring Machine Learning Projects,
                Structuring Machine Learning Projects, Improving Deep Neural Networks, Sequence
                models{' '}
              </i>
            </p>
            <p>
              <a href="https://mohamedelbaha.github.io/art/Coursera%20TFC.pdf">
                TensorFlow Developer{' '}
              </a>{' '}
              Certificate,{' '}
              <i>
                deeplearning.ai Build NLP, CNN systems using TensorFlow - Apply RNNs, GRUs, and
                LSTMs.
              </i>
            </p>
            <p>
              <a href="https://mohamedelbaha.github.io/art/Coursera%20TFC.pdf">
                GANs Specialization{' '}
              </a>{' '}
              Certificate,{' '}
              <i>
                deeplearning.ai Build NLP, CNN systems using TensorFlow - Apply RNNs, GRUs, and
                LSTMs.
              </i>
            </p>
            <p>
              <a href="https://mohamedelbaha.github.io/art/Coursera%20TFC.pdf">
                Probabilistic Deep Learning{' '}
              </a>{' '}
              Certificate,{' '}
              <i>Imperial College London TensorFlow Probability, Uncertainty Quantification.</i>
            </p>
          </div>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default certif;
