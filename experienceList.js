const entries = [
    {
        type: "project",
        title: "Custom Hand-Held Console + 2D Game Engine with ESP32-S3",
        year: "2026",
        stack: ["Embedded C", "ESP32-S3", "SPI/DMA (bare-metal)", "ILI9341", "Python", "Interrupts", "ADC (Analog to Digital Conversion)"],
        summary: "A hand-held game console built around an ESP32-S3, an ILI9341 display, four interrupt-driven buttons, and an ADC-read joystick. Rather than using existing display libraries, I wrote the SPI and DMA drivers myself at the bare register level, then built a 2D game engine on top with its own tile/entity rendering, texture format, and physics.",
        highlights: [
            "Wrote custom SPI + DMA drivers for the ILI9341 directly at the register level instead of using an existing display library",
            "Designed a grayscale texture format for entities and tiles that gets tinted at framebuffer write time, keeping asset storage compact",
            "Built a simple physics engine and entity system for the game engine from scratch",
            "Wrote Python tooling to convert images and tile maps into uint8 arrays for the engine to consume",
            "Next step: designing a custom PCB to integrate I2C peripherals (in progress)"
        ],
        video: { label: "Console demo reel", url: "https://youtube.com/watch?v=..." },
        links: [
            { label: "Repo", url: "https://github.com/yourname/example-repo" }
            
        ]
        
    },
    {
        type: "project",
        title: "3D Room Scanner with LIDAR and Point Cloud Visualization",
        year: "2025",
        course: "COMPENG 2DX3 — Microprocessor Systems",
        stack: ["Embedded C", "MSP432E401Y", "I2C", "UART", "Python", "Open3D", "NumPy"],
        summary: "A device that scans rooms and hallways up to 4 meters wide and reconstructs them as 3D point clouds. A VL53L1X time-of-flight (LIDAR) sensor mounted on a stepper motor takes a distance reading every 11.25 degrees for a full 360° sweep, and the operator moves the whole rig forward between sweeps to build up a 3D scan one Y-Z plane slice at a time.",
        highlights: [
            "Built the microcontroller-side firmware on an MSP432E401Y (Cortex-M4F) to drive the stepper motor, poll the ToF sensor over I2C, and stream measurements to a PC over UART at 115,200 baud using a small custom protocol",
            "Offloaded trig calculations (sine/cosine for coordinate conversion) to the PC instead of the microcontroller, since the MCU's single-precision FPU wasn't accurate enough for the required calculations",
            "Wrote the Python data-collection program (PySerial) that converts each distance reading into real-world x/y/z coordinates and writes them to a points.xyz file",
            "Built a second Python program using Open3D and NumPy to render the collected points as both a point cloud and a connected wireframe visualization",
            "Calculated the system's error sources end-to-end: 1mm max quantization error from the ToF sensor, and identified motor step rate as the primary speed bottleneck through direct testing"
        ],
        links: [],
        noSource: true
    },
    {
        type: "job",
        title: "Outlook Signature Management Add-in",
        year: "Summers 2022 – 2025",
        course: "PaayaTech — Mississauga, Ontario",
        stack: ["Office.js", "TypeScript", "Webpack"],
        summary: "An Outlook add-in that lets users browse and apply company-managed email signatures and contacts directly from a task pane, keeping outgoing email consistent with brand standards across the organization.",
        highlights: [
            "Built the task pane UI for browsing and selecting centrally managed signatures and contacts",
            "Implemented Office.js event handlers to automatically apply signatures to outgoing email",
            "Authored and maintained the add-in manifest required for centralized, org-wide distribution",
            "Configured the Azure DevOps distribution pipeline for shipping manifest updates"
        ],
        links: []
    },
    {
        type: "job",
        title: "Cross-Platform Mobile App",
        year: "Summers 2022 – 2025",
        course: "PaayaTech — Mississauga, Ontario",
        stack: [".NET MAUI", "C#", "SQLite", "MSAL", "Entra ID"],
        summary: "A native-feeling iOS and Android application with offline-first architecture, working closely with native OS APIs for performance and platform-appropriate styling.",
        highlights: [
            "Built the app in .NET MAUI targeting both iOS and Android from a shared codebase",
            "Implemented local-first storage with SQLite for offline access and faster load times",
            "Integrated Microsoft Entra ID authentication via MSAL for secure enterprise sign-in",
            "Owned end-to-end deployment: build pipelines, code signing, and app store/enterprise distribution"
        ],
        links: []
    },
    {
        type: "job",
        title: "Backend APIs & Azure Infrastructure",
        year: "Summers 2022 – 2025",
        course: "PaayaTech — Mississauga, Ontario",
        stack: ["ASP.NET Core", "MediatR", "Entity Framework", "SQL Server", "Azure DevOps"],
        summary: "RESTful APIs and the Azure infrastructure supporting the company's mobile app and add-in products, including the authentication backend both relied on.",
        highlights: [
            "Developed and maintained RESTful APIs using ASP.NET Core MVC, MediatR, Entity Framework, and SQL Server",
            "Configured Azure resources including Entra ID app registrations powering MSAL authentication",
            "Adopted an AI-assisted workflow to speed up code generation, refactoring, and documentation"
        ],
        links: []
    },
    {
        type: "project",
        title: "Viditor — Desktop Video Clipper",
        year: "2025",
        stack: ["C#", "WinUI 3", "FFMPEG", "MVVM"],
        summary: "A desktop video clipper built in C# with WinUI 3, featuring a timeline-based editing interface with trim, split, and delete operations on individual clips, and an FFMPEG-backed pipeline for decoding, encoding, and rendering the final output. Useful as a light weight tool to quickly trim and cut footage out of clips for uploading",
        highlights: [
            "Built a custom timeline UI where each clip is its own bound, color-codeable control supporting trim, split, and delete",
            "Solved audio/video synchronization — the hardest part of the project — keeping playback and exported output aligned across cuts and edits",
            "Integrated FFMPEG for decoding, encoding, and format conversion in the render pipeline",
            "Used the MVVM pattern with data binding and change notification to keep the timeline UI in sync with the underlying edit state",
            "Future plans to rewrite in Vulkan to add more dynamic editing, such as overlays and modifying the viewport"
        ],
        links: []
    },
];