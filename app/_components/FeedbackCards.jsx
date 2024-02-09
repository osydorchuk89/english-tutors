import Image from "next/image";
import { Box, ImageList, ImageListItem } from "@mui/material";

const uploadedImages = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/7a68/e6a5/35a305d9459e50f444a030b939452f35?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAvgeu0tWPSwzGY-3Q5LvVDevBWHzpj2nUubS-ygcxVZAAW8idBEpRsBLht8sD1VGWIyhEFoLKgVSyZ8oHMxvGnr1HgwiaPLSmQBX4DVTDHpW1Dc5WxjOL3gRuxIh8n7gGpsTJ9TaPNrLbnKBxvFYQHgibrmaeSml~4qP4H7kgq8eyGa1vtxhVGVllfBQmDRU4WfB8WxHfX~TqZD86j-MHlZVs5X94CF2jSwz5C-q9o1H1XPE10Ue0zGkX7Dz8HCVau3Tz4kKvgt9qTT6EGxol5nfxj8UpUeSFdZ51p~8G-Lf~9idV8BdbdTiyBq5UeXLFnTNy0WLMXuFgGBV7Z-Yg__",
        text: "lorem ipsum",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/572a/2f7a/69a33232131f0c94496e778d4f4d7051?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4Q10~uQCQjCWhWRr4t0h6~NzDt0AeWyJfoWmF63q0AMVjIdY-DIL0x5s4VNizwJ3EPlBdn7vOsQKsxpAIOO2UTN~sf47ki0EL1cvmPkcfA59UnQjzL3-6P8WnEmn1USNnQEr-hE2cxmidjuJofo0wMUOBkd3ZR6TU~~OSW5~BTatpe4eywJdhwXkTSK36tSO2tIxafwNal7TLzG-IOiA6fDv9JOWPAVMozY5CR3jYmLlN0vUlcUker-cc2NL4n24ALyfz8pAg3PryVVAIbbirgLQKWMaKQRVx-Mmzo0p2q5UMwUT5lrs4vkL0KdeHPflhOUnAji1SVraLnjGoDDBg__",
        text: "lorem ipsum",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/3341/da70/98102186e17bf596f08e2d27e16bc226?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fw42FjatuPmKsV2GjVXZH5SFgHtdtiN12ojIvlsbr9d4xdQEP42Y75Ek8MsSHm6gg13dF3MNmlqbFFTbY2aEHhIJu7~HL~bWSNODbKphRIPrUH61HLV77BXCBLdns0r3hcGeKYUCMBB~POeA0grHckuZ7GLjh9h7LDV4uOSwu7UfrXbq4FPHHqilzFK0UgYB8ihCbpcKA5HjGh-Ya4PBrKvslnAb5dLw4zCgqZ2rWvu0Q9qmpCspCsTMWtRk1p1e~J9cQZqrDY-uK89m1SQwZcE0cWYB6E1KwEZlCmXrHfcfS5DW-hDNFAl~USnNda38j6NQo7K99QgMkOQzMkQsZQ__",
        text: "lorem ipsum",
    },
    {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/972b/f315/56a9e95ac0d336b8c4eb698d95b877a6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQP~z7F1qBSNWrHpiFbkOqKNfDfQF2JJd0zQpfIqjitbvquLfq0JIRP~m0AGffSRnFyFazFWICPisJ0kw9pb-cf~WHrH20TNi7bRhRLl0BMtVELoVTyUiUH8d0rj8qr~Q0ai07smUNUq1Sb5y-~CLqQrm4CQFr46lStm08jnO5MkRiwRIbG7kXPcjgTKN37UChmoitLBEMV961zqQzO3XGEmjXvtaXmNgG1f0~YFOFbFkVUEQPIDPTzRylc5Po3mFA1TgcSOtwlu3Jlgjj2udfVRF2kfYXGwH2C5JKhLNiT6N1J0OOspBsGg577cMZFkHc74VdL6-Yygm4WIQKVWag__",
        text: "lorem ipsum",
    },
    {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/a6b1/1bbc/3920e497ea1eac6b945ff52c3abb8aa2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aIWlF7KLIYqZPjDC~WSnZzlJAZ-qZpwbsTEAHIosX~mhR7Z-aUkYwXup2riDTRpF0pQLMmld7Ajv3TrLd6c4h0NAWeHjB~ZAmJqvHG8KsWQQfZDslofdGmwgR4UuP6FBJB4w1ytLZsCEpAeYvcsDNmKiplOYxp6Vd~~D2fazy165wUlSr7GCNQa8~fCW2vpa~bAYB8vhmmZ39MiqwXsB0HJLLqnPvuIS6~vLlEsj1G277SJOSFH~Lg8beSLhILEipqWxwkXrbI-FkLzWuC29DMpfQmyrARTlQb0I7GJ-LOlO50W69uqlUiQbj3Fc5Kj2hFuDZWCaP8T3qM8yPCg4oQ__",
        text: "lorem ipsum",
    },
];

export const FeedbackCards = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                width: "45rem",
                height: "60.438rem",
                backgroundColor: "background.main",
                borderRadius: "1.5rem 0rem 0rem 1.5rem",
                p: "1rem",
                right: 0,
                overflowY: "scroll",
            }}
        >
            <ImageList variant="masonry" cols={2} gap={10}>
                {uploadedImages.map((item) => (
                    <ImageListItem
                        key={item.id}
                        sx={{ borderRadius: "0.5rem", overflow: "hidden" }}
                    >
                        <img src={item.img} alt={item.text} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};
