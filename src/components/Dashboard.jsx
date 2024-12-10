import React, { useEffect, useRef,useState} from 'react';
import useLogout from '../hooks/useLogout.jsx';


function Dashboard() {
 const logout = useLogout()
  const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    let w, h, ctx, rate, arc, time, count, size, speed, parts, colors, mouse;

    useEffect(() => {
      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      rate = 60;
      arc = 100;
      size = 7;
      speed = 20;
      colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
      mouse = { x: 0, y: 0 };

      const resizeCanvas = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
      };

      const create = () => {
        time = 0;
        count = 0;
        parts = [];

        for (let i = 0; i < arc; i++) {
          parts[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size,
          };
        }
      };

      const particles = () => {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < arc; i++) {
          const li = parts[i];
          const distanceFactor = DistanceBetween(mouse, parts[i]);
          const distance = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
          ctx.beginPath();
          ctx.arc(li.x, li.y, li.size * distance, 0, Math.PI * 2, false);
          ctx.fillStyle = li.c;
          ctx.strokeStyle = li.c;
          if (i % 2 === 0) ctx.stroke();
          else ctx.fill();

          li.x = li.x + li.toX * (time * 0.05);
          li.y = li.y + li.toY * (time * 0.05);

          if (li.x > w) li.x = 0;
          if (li.y > h) li.y = 0;
          if (li.x < 0) li.x = w;
          if (li.y < 0) li.y = h;
        }

        if (time < speed) {
          time++;
        }
        setTimeout(particles, 1000 / rate);
      };

      const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      const DistanceBetween = (p1, p2) => {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
      };

      window.addEventListener('resize', resizeCanvas);
      canvas.addEventListener('mousemove', handleMouseMove);

      resizeCanvas();
      create();
      particles();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []);

    return <canvas ref={canvasRef} />;
  };


  const [userName,setUserName]=useState("")

  useEffect(()=>{
    let userName = sessionStorage.getItem("userName")
    if(userName)
    {
      setUserName(userName)
    }
  },[])


  return (
    <>
    
      <ParticleCanvas  />
      
   
      
      <div className="sign " id='sign' style={{paddingBottom:"180px"}} >
      <div className='wel'>
       WELCOME
    </div>
    <br/>
      <br/>
      <br/>
      <div style={{ position:'absolute', marginTop:"300px" }}>
  <span className="fast-flicker"></span><span  className="flicker">{userName}</span>
  <br />
  </div>
  
  <button id='log' style={{ position:'absolute', marginTop:"500px" }}>
  <span onClick={logout} >LOGOUT</span>
</button>



  
</div>


   
</>
  );
}

export default Dashboard;
