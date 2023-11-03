import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

function ParticlesBg() {
  async function particlesInit(engine) {
    await loadFull(engine)
  }

  return (
    <div className='absolute z-[-1] object-cover w-screen'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#000',
            },
          },
          fpsLimit: 70,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#eee',
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default ParticlesBg
