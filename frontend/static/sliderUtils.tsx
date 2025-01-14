import * as React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

/** Component properties for styled div */
type StyledDivProps = Partial<Omit<React.HTMLProps<HTMLDivElement>, 'children' | 'ref' | 'as'>>;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

export const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

/** State for styled components */
interface StyledState {
  index: number;
  valueNow: number;
}

export const Thumb = (props: StyledDivProps, state: StyledState): JSX.Element => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

export const StyledTrack = styled.div<StyledState>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? '#2a91d1' : '#ddd')};
  border-radius: 999px;
`;

/** Component properties for styled track */
type StyledTrackProps = StyledDivProps & StyledState;

export const Track = (props: StyledTrackProps, state: StyledState): JSX.Element => (
  <StyledTrack {...props} index={state.index} />
);

export const SingleStyledTrack = styled.div<StyledState>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 0 ? '#2a91d1' : '#ddd')};
  border-radius: 999px;
`;

/** Component properties for single styled track */
type SingleStyledTrackProps = StyledDivProps & StyledState;

export const SingleTrack = (props: SingleStyledTrackProps, state: StyledState): JSX.Element => (
  <SingleStyledTrack {...props} index={state.index} />
);
