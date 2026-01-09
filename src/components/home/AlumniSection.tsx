
import alumniBg from "@/assets/alumni-bg.jpg";

const AlumniSection = () => {
    return (
        <section
            className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${alumniBg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 container-custom text-center px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-md">
                    What our Alumni Says...
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light arial leading-relaxed drop-shadow-sm">
                        Bhajarang Engineering College gave me a strong foundation in both knowledge and confidence.
                        The guidance, facilities, and exposure here prepared me for my professional journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AlumniSection;
