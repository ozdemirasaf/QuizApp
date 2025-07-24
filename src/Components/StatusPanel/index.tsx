import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useSelector } from 'react-redux'
import type { RootState } from '../../Redux/store'

export default function StatusPanel() {
    const isStarted = useSelector((state: RootState) => state.quiz.isStarted)

    return (
        <CountdownCircleTimer
            isPlaying={isStarted}
            duration={600}
            colors={'#61b492'}
            size={140}
        >
            {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60)
                const seconds = remainingTime % 60
                const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

                return (
                    <div style={{ fontSize: '28px', color: '#e17c57', fontWeight: 'bold' }}>
                        {minutes}:{formattedSeconds}
                    </div>
                )
            }}
        </CountdownCircleTimer>
    )
}
