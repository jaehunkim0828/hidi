'use client';
import FadeInWhenVisible from '@/components/FadeIn';
import Back10 from '@/public/images/back10.png';
import Back11 from '@/public/images/back11.png';
import Back2 from '@/public/images/back2.png';
import Char1 from '@/public/images/character1.png';
import Char2 from '@/public/images/character2.png';
import Char3 from '@/public/images/character3.png';
import Chat1 from '@/public/images/chat1.png';
import Chat2 from '@/public/images/chat2.png';
import Chat3 from '@/public/images/chat3.png';
import Checklist1 from '@/public/images/checkList1.png';
import Checklist2 from '@/public/images/checkList2.png';
import Down from '@/public/images/down.png';
import Footer from '@/public/images/footer.png';
import Interview1 from '@/public/images/interview1.png';
import Interview2 from '@/public/images/interview2.png';
import Interview3 from '@/public/images/interview3.png';
import L1 from '@/public/images/landing1.png';
import L2 from '@/public/images/landing2.png';
import L3 from '@/public/images/landing3.png';
import L4 from '@/public/images/landing4.png';
import Left2 from '@/public/images/left2.png';
import Main1 from '@/public/images/main1.png';
import Main2 from '@/public/images/main2.png';
import Make1 from '@/public/images/make1.png';
import Make2 from '@/public/images/make2.png';
import Make3 from '@/public/images/make3.png';
import Make4 from '@/public/images/make4.png';
import Meet1 from '@/public/images/meet1.png';
import Meet2 from '@/public/images/meet2.png';
import Onb1 from '@/public/images/onb1.png';
import Onb2 from '@/public/images/onb2.png';
import Onb3 from '@/public/images/onb3.png';
import P1 from '@/public/images/pe1.png';
import P2 from '@/public/images/pe2.png';
import P3 from '@/public/images/pe3.png';
import Pe from '@/public/images/persona.png';
import Pig from '@/public/images/pig.png';
import Report1 from '@/public/images/report1.png';
import Report2 from '@/public/images/report2.png';
import Report3 from '@/public/images/report3.png';
import Report4 from '@/public/images/report4.png';
import Right2 from '@/public/images/right2.png';
import Sche1 from '@/public/images/schedule1.png';
import Sche2 from '@/public/images/schedule2.png';
import Survey from '@/public/images/survey.png';
import Use1 from '@/public/images/use1.png';
import Use2 from '@/public/images/use2.png';
import Use3 from '@/public/images/use3.png';
import style from '@/styles/home.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);
  const projectoRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLImageElement>(null);
  const playRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = playRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={style.container}>
      <button
        className={style.up}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IoIosArrowUp size={40} />
      </button>
      <div className={style.landing}>
        <header>
          <nav>
            <button
              onClick={() =>
                videoRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              VIDEO
            </button>
            <button
              onClick={() =>
                projectoRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              PROJECT
            </button>
            <button
              onClick={() =>
                serviceRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              SERVICE
            </button>
            <button
              onClick={() =>
                designRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              DESIGN
            </button>
          </nav>
        </header>
        <div className={style.content}>
          <FadeInWhenVisible duration={1.5}>
            <Image className={style.logo} src={L2} alt='l1' />
          </FadeInWhenVisible>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
          >
            <div className={style.phone}>
              {/* main: position: relative → OK */}
              <motion.div
                style={{ position: 'relative' }} // 유지
                animate={{ y: [10, 40, 10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image className={style.main} src={L1} alt='l2' />
              </motion.div>

              {/* right: position: absolute → OK */}
              <motion.div
                style={{ position: 'absolute', top: '10vw', right: '0px' }} // 유지
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image className={style.right} src={L3} alt='l3' />
              </motion.div>

              {/* left: position: absolute → OK */}
              <motion.div
                style={{ position: 'absolute', top: '3vw', left: '3vw' }} // 유지
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image className={style.left} src={L4} alt='l4' />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={style.video} ref={videoRef}>
        <video
          ref={playRef}
          src={'/video.mov'}
          onEnded={() => setIsPlaying(false)}
        ></video>
        <button className={style.switch} onClick={handleTogglePlay}>
          {isPlaying ? <FaPause size={120} /> : <FaPlay size={120} />}
        </button>
      </div>
      <div className={style.step1}>
        <div className={style.head}>
          <FadeInWhenVisible delay={0.3}>
            <span className={style.sub}>Background</span>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <h2 className={style.title}>
              {`누구나 마음속엔 해내고 싶은 계획이 있지만,\n 끝내 해내지 못한 경험이 있습니다.`}
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div className={style.info}>
              <span>{`해야 할 일이 머릿속에 분명히 떠올라도,\n집중 흐름이 끊기고 우선순위가  흐려지기 쉽습니다.`}</span>
              <span>{`이런 반복되는 실패를 어떻게 하면 바꿀 수 있을까요?\n흐름을 이해하고, 그 시작점을 함께 설계해야 합니다.`}</span>
            </div>
          </FadeInWhenVisible>
        </div>
        <div className={style.chatList}>
          <FadeInWhenVisible delay={0.3} y={50}>
            <Image className={style.chat1} src={Chat1} alt='chat1' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.8} y={50}>
            <Image className={style.chat2} src={Chat2} alt='chat2' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1.2} y={50}>
            <Image className={style.chat3} src={Chat3} alt='chat3' />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step1_1}>
        <Image className={style.cover} src={Back2} alt='img' />
        <div className={style.head}>
          <FadeInWhenVisible delay={0.3}>
            <span className={style.sub}>Painpoint</span>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div
              className={style.desc}
            >{`60명을 대상으로 6일동안 실시한 설문조사를 통해\n제공해야 할 서비스를 도출하였습니다.`}</div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible delay={0.3} y={50} zIndex={1}>
          <Image className={style.survey} src={Survey} alt='survey' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7} zIndex={1}>
          <motion.div
            style={{ position: 'relative' }} // 유지
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image className={style.down} src={Down} alt='down' />
          </motion.div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step2}>
        <div className={style.head}>
          <FadeInWhenVisible delay={0.3}>
            <span className={style.sub}>Insight</span>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <h2 className={style.title}>
              {`특히 ADHD환자라면? 더욱 더 하루가 망가지기 쉽습니다.\n그럼 그들에게 필요한건 무엇일까요?`}
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.7} y={30}>
            <div className={style.scheduleList}>
              <div className={style.schedule}>🗓️ 일정 비서</div>
              <div className={style.schedule}>⏰ 약속 관리</div>
              <div className={style.schedule}>🌿 감정 관리</div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step3}>
        <FadeInWhenVisible delay={0.3}>
          <span className={style.sub}>In Depth Interview</span>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <h2
            className={style.step3Title}
          >{`이후, ADHD 환자를 심층인터뷰 한 결과\n해야 할 일을 머릿속에서 정리하는것을 어려워했어요`}</h2>
        </FadeInWhenVisible>

        <div className={style.interviewList}>
          <FadeInWhenVisible delay={0.7} y={30}>
            <Image src={Interview1} alt='interview1' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.9} y={30}>
            <Image
              style={{ width: '1400px' }}
              src={Interview2}
              alt='interview2'
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1.3} y={30}>
            <Image src={Interview3} alt='interview3' />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step4}>
        <Image className={style.pe} src={Pe} alt='pe' />
        <div className={style.personaList}>
          <FadeInWhenVisible delay={0.3} y={50}>
            <Image
              style={{ position: 'relative', left: '-80px' }}
              src={P1}
              alt='p1'
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.6} y={50}>
            <Image src={P2} alt='p2' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1} y={50}>
            <Image
              style={{ position: 'relative', left: '-80px' }}
              src={P3}
              alt='p3'
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible delay={0.6}>
          <motion.div
            style={{ position: 'relative' }} // 유지
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image className={style.down} src={Down} alt='down' />
          </motion.div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step4_1}>
        <FadeInWhenVisible delay={0.3}>
          <Image className={style.use1} src={Use1} alt='use1' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <Image className={style.use2} src={Use2} alt='use2' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
          <div className={style.desc}>
            말로 등록하고, 자동으로 정리하고, 원하는 방식으로 알림까지!
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3} y={30}>
          <div className={style.phone}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.use3} src={Use3} alt='use3' />
            </motion.div>
            <motion.div
              style={{ position: 'absolute', top: '80px', left: '100px' }} // 유지
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.left2} src={Left2} alt='left2' />
            </motion.div>
            <motion.div
              style={{ position: 'absolute', top: '150px', right: '100px' }} // 유지
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.right2} src={Right2} alt='right2' />
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>
      <div
        className={style.step3}
        style={{ padding: '150px 0' }}
        ref={serviceRef}
      >
        <FadeInWhenVisible delay={0.3}>
          <Image className={style.onbSub} src={Onb1} alt='onb1' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <Image className={style.onbTitle} src={Onb2} alt='onb2' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
          <div
            className={style.onbDesc}
          >{`온보딩을 통해 하이디가 어떤 서비스인지 알아봐요. 주요 플로우와 기능 위주로 내용을 구성했어요.\n 사용자의 하루를 정리하고, 집중 흐름을 만들어주는 하이디의 핵심 기능들을 단계별로 살펴보세요.`}</div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.9} y={30}>
          <motion.div
            style={{ position: 'relative' }} // 유지
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image className={style.onb3} src={Onb3} alt='onb3' />
          </motion.div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step5}>
        <FadeInWhenVisible
          delay={0.7}
          y={30}
          zIndex={10}
          style={{
            position: 'absolute',
            bottom: '-200px',
          }}
        >
          <Image className={style.main2} src={Main2} alt='main2' />
        </FadeInWhenVisible>
        <div className={style.content}>
          <FadeInWhenVisible delay={0.3}>
            <Image className={style.main1} src={Main1} alt='main1' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <span>
              {`해야 할 일, 챙겨야 할 소지품, 완료 여부까지 모든 정보를 한눈에 \n정리하고, 우선순위를 놓치지 않도록 하이디가 도와드립니다.`}
            </span>
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step6}>
        <FadeInWhenVisible delay={0.3}>
          <motion.div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }} // 유지
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image src={Meet1} alt='meet1' />
          </motion.div>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible delay={0.3}>
        <div className={style.device}>
          <Image src={Meet2} alt='meet2' />
        </div>
      </FadeInWhenVisible>
      <div className={style.step7}>
        <div className={style.step7Head}>
          <FadeInWhenVisible delay={0.3}>
            <div className={style.sub}>Add Schedule</div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div className={style.info}>
              <h2 className={style.step7Title}>
                {`복잡한 작성 없이\n 바로 말하면 끝!`}
              </h2>
              <div className={style.description}>
                <h3>
                  {`생각났을 때 HiDi에 바로 말하면 끝! 머릿속에 떠오른 할 일을\n손으로 쓰지 않아도 돼요. 음성으로 말하면 HiDi가 알아듣고 일정을 등록해줘요.`}
                </h3>
                <span>
                  {`Just tell HiDi when you think of something! You don't have to
                write down the things you want to do by hand. Just say them out
                loud and HiDi will understand and register your schedule.`}
                </span>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
        <div className={style.content}>
          <FadeInWhenVisible
            delay={0.3}
            y={50}
            style={{ position: 'absolute', top: '-100px' }}
          >
            <Image className={style.chat} src={Sche1} alt='sche1' />
          </FadeInWhenVisible>
          <FadeInWhenVisible
            delay={0.8}
            y={50}
            style={{ position: 'relative' }}
          >
            <Image className={style.phone} src={Sche2} alt='sche2' />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step8}>
        <FadeInWhenVisible delay={0.3}>
          <div className={style.sub}>TOOBAK Chat</div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <h2 className={style.title}>
            하루에 있었던 일을 투박이에게 말해보세요.
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
          <div className={style.description}>
            {`기분도 들어주고, 맛집이든 감정이든 소중한 순간을 놓치지 않도록,투박이가 당신의 하루를 따뜻하게 정리해줘요.\n 말로 털어놓기만 하면, 감정과 기억을 함께 저장해주는 든든한 대화 파트너가 되어줍니다.`}
          </div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step3} ref={projectoRef}>
        <FadeInWhenVisible delay={0.3} y={50}>
          <Image className={style.check1} src={Checklist1} alt='checklist1' />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.6} y={50}>
          <Image className={style.check2} src={Checklist2} alt='checklist2' />
        </FadeInWhenVisible>
      </div>
      <div className={style.step9}>
        <FadeInWhenVisible delay={0.3}>
          <div className={style.sub}>Make An Appointment</div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <h2 className={style.title}>친구와 간편하게 약속을 잡아요.</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
          <div className={style.description}>
            {`약속 잡기 기능을 통해 친구와의 일정을 쉽고 빠르게 정할 수 있어요.\n카테고리 선택부터 날짜, 시간까지 한 번에 정리하고 편하게 약속을 제안해보세요.`}
          </div>
        </FadeInWhenVisible>
        <div className={style.content}>
          <FadeInWhenVisible delay={0.7} y={30}>
            <Image className={style.make1} src={Make1} alt='make1' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.9} y={30}>
            <Image className={style.make1} src={Make2} alt='make2' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1.1} y={30}>
            <Image className={style.make1} src={Make3} alt='make3' />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1.3} y={30}>
            <Image className={style.make2} src={Make4} alt='make4' />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className={style.step3}>
        <FadeInWhenVisible delay={0.3}>
          <div className={style.sub}>Report</div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <h2
            className={style.title}
          >{`나만의 하이디 리포트로\n성취감과 동기부여를 가져가요!`}</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
          <div className={style.description}>
            {`매일의 기록이 쌓이면, 나만의 리포트가 완성돼요. 작은 집중도 놓치지 않고,\n감정과 일정의 흐름을 리포트로 확인할 수 있어요. 기록을 통해 나를 더 잘 이해해보세요.`}
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7} y={50}>
          <div className={style.reportContent}>
            <motion.div
              style={{ position: 'relative' }} // 유지
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.report1} src={Report1} alt='report1' />
            </motion.div>
            <motion.div
              style={{ position: 'absolute', top: 0, left: '30px' }} // 유지
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.report2} src={Report2} alt='report2' />
            </motion.div>
            <motion.div
              style={{ position: 'absolute', top: '30px', right: '30px' }} // 유지
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image className={style.report3} src={Report3} alt='report3' />
            </motion.div>
            <Image className={style.report4} src={Report4} alt='report4' />
          </div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step10}>
        <FadeInWhenVisible delay={0.3} y={50}>
          <motion.div
            style={{ position: 'relative' }} // 유지
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              style={{ top: '20px', position: 'relative' }}
              src={Pig}
              alt='pig'
            />
          </motion.div>
        </FadeInWhenVisible>
      </div>
      <div className={style.step11}>
        <FadeInWhenVisible delay={0.3}>
          <div className={style.sub}>Character</div>
        </FadeInWhenVisible>

        <div className={style.content}>
          <FadeInWhenVisible delay={0.5}>
            <div className={style.info}>
              <Image src={Char1} alt='char1' />
              <span>{`곰은 느긋하지만 겨울잠을 준비하며 철저히 계획하는 동물이에요.투박이는 이런 곰의 특성을 닮아, 푸근한 모습 뒤에 든든한 일정 관리 능력을 가진 비서예요.당신의 하루를 안정적으로 지켜줄 투박이, 믿고 맡겨보세요.`}</span>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.7} y={50}>
            <div className={style.good}>
              <Image className={style.char3} src={Char3} alt='char3' />
              <Image className={style.char2} src={Char2} alt='char2' />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <Image
        className={style.back10}
        src={Back10}
        alt='back10'
        ref={designRef}
      />
      <Image className={style.back10} src={Back11} alt='back11' />
      <Image className={style.back10} src={Footer} alt='footer' />
    </div>
  );
}
