import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ArrowUp, ArrowDown } from 'lucide-react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<number>();

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsSession(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const adjustLength = (type: 'break' | 'session', amount: number) => {
    if (isRunning) return;

    if (type === 'break') {
      const newLength = breakLength + amount;
      if (newLength > 0 && newLength <= 60) {
        setBreakLength(newLength);
      }
    } else {
      const newLength = sessionLength + amount;
      if (newLength > 0 && newLength <= 60) {
        setSessionLength(newLength);
        if (isSession) {
          setTimeLeft(newLength * 60);
        }
      }
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            if (audioRef.current) {
              audioRef.current.play();
            }
            setIsSession(!isSession);
            return isSession ? breakLength * 60 : sessionLength * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isSession, breakLength, sessionLength]);

  return (
    <div className="min-h-screen bg-teal-700 flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-5xl font-light mb-16">25 + 5 Clock</h1>
      
      <div className="flex justify-center gap-32 mb-16">
        <div className="text-center">
          <h2 id="break-label" className="text-3xl font-light mb-2">Break Length</h2>
          <div className="flex items-center justify-center gap-4">
            <button
              id="break-decrement"
              onClick={() => adjustLength('break', -1)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowDown className="w-8 h-8" />
            </button>
            <span id="break-length" className="text-4xl font-light">{breakLength}</span>
            <button
              id="break-increment"
              onClick={() => adjustLength('break', 1)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowUp className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 id="session-label" className="text-3xl font-light mb-2">Session Length</h2>
          <div className="flex items-center justify-center gap-4">
            <button
              id="session-decrement"
              onClick={() => adjustLength('session', -1)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowDown className="w-8 h-8" />
            </button>
            <span id="session-length" className="text-4xl font-light">{sessionLength}</span>
            <button
              id="session-increment"
              onClick={() => adjustLength('session', 1)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowUp className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 id="timer-label" className="text-4xl font-light mb-4">
          {isSession ? 'Session' : 'Break'}
        </h2>
        <div
          id="time-left"
          className="text-8xl font-light mb-8 border-4 border-white rounded-3xl px-12 py-6"
        >
          {formatTime(timeLeft)}
        </div>

        <div className="flex justify-center gap-8">
          <button
            id="start_stop"
            onClick={handleStartStop}
            className="text-white hover:text-gray-200 transition-colors"
          >
            {isRunning ? (
              <Pause className="w-12 h-12" />
            ) : (
              <Play className="w-12 h-12" />
            )}
          </button>
          <button
            id="reset"
            onClick={handleReset}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <RotateCcw className="w-12 h-12" />
          </button>
        </div>
      </div>

      <div className="text-center text-sm opacity-70">
        <div>Designed and Coded by</div>
        <div>code with sri</div>
      </div>

      <audio
        id="beep"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;