"use client";

export default function Logo({ className = "w-10 h-10" }) {
    return (
        <div className={`${className} relative`}>
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient
                        id="logoGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            className="text-blue-500"
                            stopColor="currentColor"
                        />
                        <stop
                            offset="100%"
                            className="text-purple-600"
                            stopColor="currentColor"
                        />
                    </linearGradient>
                </defs>

                <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="url(#logoGradient)"
                    className="drop-shadow-lg"
                />

                <path
                    d="M12 14L8 20L12 26"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M28 14L32 20L28 26"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <text
                    x="20"
                    y="25"
                    textAnchor="middle"
                    className="fill-white font-bold text-sm"
                    style={{ fontSize: "10px" }}
                >
                    VS
                </text>
            </svg>
        </div>
    );
}
