import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs.tsx";

const TabsButtons = (props:any) => {
    return (
        <Tabs defaultValue="about" className="w-full ">
            <TabsList className={"bg-white dark:bg-n700  w-full px-2 py-8 rounded-xl"}>
                <div
                    className="relative w-full flex items-center justify-center"
                    onMouseEnter={e => {
                        const tooltip = document.getElementById('portfolio-tooltip');
                        if (tooltip) tooltip.style.display = 'block';
                    }}
                    onMouseLeave={e => {
                        const tooltip = document.getElementById('portfolio-tooltip');
                        if (tooltip) tooltip.style.display = 'none';
                    }}
                >
                    <TabsTrigger
                        className={"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme opacity-50 cursor-not-allowed"}
                        value="portfolio"
                        disabled
                    >
                        Portafolio
                    </TabsTrigger>
                    <span
                        id="portfolio-tooltip"
                        style={{display: 'none', position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}
                        className="mt-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded shadow-lg"
                    >En construcción</span>
                </div>
                <TabsTrigger className={"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"} value="about">Acerca de mí</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio">
                {props.portfolio}
            </TabsContent>
            <TabsContent value="about">
                {props.about}
            </TabsContent>
        </Tabs>
    );
};

export default TabsButtons;