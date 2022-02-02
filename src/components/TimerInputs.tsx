import React from 'react';
import styled from 'styled-components';
import CountdownTimer from '../lib/logic/Countdown';
import Button from './Button';
import Input from './Input';

interface TimerInputsProps {
  countdown: CountdownTimer;
  seconds: string;
  setSeconds: (minutes: string) => void;
  minutes: string;
  setMinutes: (minutes: string) => void;
  realTime: number;
  setOutput: (output: string) => void;
}

const StyledTimerWrapper = styled.div`
  display: flex;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

const StyledInfoText = styled.span`
  font-size: 14px;
`;

const StyledTwoDots = styled.span`
  font-size: 42px;
  height: 85px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  margin: 0 10px;
`;

const TimerInputs: React.FC<TimerInputsProps> = ({
  countdown,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  realTime,
  setOutput,
}) => {
  const [isCountdownStart, setIsCountdownStart] = React.useState(false);

  const handleStart = () => {
    countdown.start();
    setIsCountdownStart(true);
  };

  const handleClear = () => {
    countdown.stop();
    setIsCountdownStart(false);
    setOutput('00:00');
    setMinutes('0');
    setSeconds('0');
  };

  const handlePause = () => {
    countdown.pause();
    setIsCountdownStart(false);
  };

  const handleDisable = () => {
    if (minutes.length === 3 && !minutes.includes('0') && seconds.length === 3 && !seconds.includes('0')) return true;
    if ((minutes === '0' || minutes === '00') && seconds === '0') return true;
    if (minutes === '00' && (seconds === '00' || seconds === '0')) return true;
    if (minutes.length === 3 && minutes[0] !== '0') return true;
    if (seconds.length === 3 && seconds[0] !== '0') return true;
    return false;
  };

  React.useEffect(() => {
    if (realTime === 0) setIsCountdownStart(false);
  }, [realTime]);

  return (
    <StyledTimerWrapper>
      <StyledInputsWrapper>
        <StyledInputWrapper>
          <Input type="number" value={minutes} setValue={setMinutes} placeholder="00" minValue="00" maxValue="99" />
          <StyledInfoText>Minutes (99)</StyledInfoText>
        </StyledInputWrapper>
        <StyledTwoDots>:</StyledTwoDots>
        <StyledInputWrapper>
          <Input type="number" value={seconds} setValue={setSeconds} placeholder="00" minValue="00" maxValue="59" />
          <StyledInfoText>Seconds (59)</StyledInfoText>
        </StyledInputWrapper>
      </StyledInputsWrapper>
      <StyledButtonWrapper>
        {!isCountdownStart && <Button label="start" onClick={() => handleStart()} disabled={handleDisable()} />}
        {isCountdownStart && <Button label="pause" onClick={() => handlePause()} disabled={handleDisable()} />}
        <Button label="clear" color="secondary" onClick={() => handleClear()} disabled={handleDisable()} />
      </StyledButtonWrapper>
    </StyledTimerWrapper>
  );
};

export default TimerInputs;
