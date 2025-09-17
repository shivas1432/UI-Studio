"use client";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

const NotificationCenter = ({
  cardTitle = "Real-time component updates",
  cardDescription = "Get instant notifications when new UI components are added to your design system.",
  notificationTitle = "UI Studio",
  notificationDescription = "New component added to your library",
  notificationTime = "just now",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneVariant: Variants = {
    open: {
      transform: "translateY(-40px) rotateX(5deg)",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.320, 1],
      },
    },
    close: {
      transform: "translateY(0px) rotateX(0deg)",
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  const notificationVariant: Variants = {
    open: {
      transform: "translateY(60px) scale(1)",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.320, 1],
        delay: 0.1,
      },
    },
    close: {
      transform: "translateY(-80px) scale(0.8)",
      opacity: 0.6,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  const statusBarVariant: Variants = {
    open: {
      backgroundColor: "rgba(12, 12, 12, 0.2)",
      borderColor: "rgba(34, 197, 94, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    close: {
      backgroundColor: "rgba(10, 10, 10, 0.8)",
      borderColor: "rgba(64, 64, 64, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants: Variants = {
    open: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    close: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const parentVariant: Variants = {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  return (
 <div className="flex items-center justify-center min-h-screen bg-black p-8">      <motion.div
        onClick={() => setIsHovered((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial="close"
        animate={isHovered ? "open" : "close"}
        variants={parentVariant}
        className="relative flex max-w-[380px] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 px-8 pb-6 pt-8 shadow-2xl cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          variants={phoneVariant}
          className="relative mx-auto h-[280px] w-[270px] rounded-[48px] bg-gradient-to-br from-slate-700 to-slate-800 p-2 shadow-xl"
        >
          <div className="relative h-[264px] overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 to-black">
            {/* Status Bar */}
            <motion.div
              variants={statusBarVariant}
              className="absolute top-0 left-0 right-0 h-8 rounded-t-[40px] border-b flex items-center justify-between px-6"
            >
              <div className="text-[10px] font-medium text-white">11:03</div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </motion.div>

            {/* Notification */}
            <motion.div
              variants={notificationVariant}
              className="absolute left-4 top-12 z-10 w-[85%] rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-indigo-400/30 shadow-lg overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L12 13L21 7M3 7L5 5H19L21 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-semibold text-white">
                      {notificationTitle}
                    </p>
                    <span className="text-xs text-indigo-300 ml-2">
                      {notificationTime}
                    </span>
                  </div>
                  <p className="truncate text-xs text-slate-300 mt-0.5">
                    {notificationDescription}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* App Grid */}
            <div className="absolute top-24 flex h-full w-full flex-col items-center gap-4 px-6 pt-8">
              <div className="flex w-full items-center justify-between">
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-pink-500 to-rose-500">
                    <InstagramIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-green-500 to-green-600">
                    <WhatsAppIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-blue-500 to-blue-600">
                    <FacebookIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-red-500 to-red-600">
                    <YouTubeIcon />
                  </SocialIcon>
                </motion.div>
              </div>
              <div className="flex w-full items-center justify-between">
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-blue-400 to-blue-500" badge="3">
                    <TwitterIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-purple-600 to-purple-700">
                    <DiscordIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-blue-600 to-indigo-600">
                    <LinkedInIcon />
                  </SocialIcon>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-yellow-400 to-yellow-500">
                    <SnapchatIcon />
                  </SocialIcon>
                </motion.div>
              </div>
              <div className="flex w-full items-center justify-between">
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-indigo-500 to-purple-600" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-emerald-500 to-teal-600" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-orange-500 to-red-500" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SocialIcon color="bg-gradient-to-br from-cyan-500 to-blue-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 h-[200px] w-full rounded-b-2xl bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <div className="absolute bottom-6 left-0 w-full px-8">
          <h3 className="text-lg font-bold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {cardTitle}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {cardDescription}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const SocialIcon = ({ 
  children, 
  color = "bg-gradient-to-br from-slate-600 to-slate-700",
  badge 
}: { 
  children?: React.ReactNode; 
  color?: string;
  badge?: string;
}) => {
  return (
    <div className="relative">
      <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center shadow-lg border border-white/10`}>
        {children}
      </div>
      {badge && (
        <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-slate-900">
          {badge}
        </div>
      )}
    </div>
  );
};

// Social Media Icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SnapchatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

export default NotificationCenter;