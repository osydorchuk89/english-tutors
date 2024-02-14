import Image from "next/image";
import { Box, Paper, Stack, Typography } from "@mui/material";

const tutorsData = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 6,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
    {
        id: 7,
        img: "https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__",
        title: "Анастасія",
        experience: "4 роки",
    },
];

export const TutorsCards = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "710px",
                height: "100%",
            }}
        >
            <Paper
                sx={{
                    position: "absolute",
                    width: "608px",
                    height: "100%",
                    right: 0,
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                }}
            />
            <Stack sx={{ width: "590px", height: "534px" }}></Stack>
            {/* {tutorsData.map((item) => (
                <Box
                    key={item.id}
                    className="flip-card"
                    sx={{
                        width: "17.8rem",
                        height: "20.3rem",
                        backgroundColor: "background.dark",
                        borderRadius: "1rem",
                        m: "1rem",
                    }}
                >
                    <ImageListItem
                        className="flip-card-front"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                mb: "1rem",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Box
                            sx={{
                                borderRadius: "1rem",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={166}
                                height={166}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "1.125rem",
                                fontWeight: 700,
                                mt: "1rem",
                            }}
                        >
                            Досвід викладання
                        </Typography>
                        <Typography sx={{ mb: "1rem" }}>
                            {item.experience}
                        </Typography>
                    </ImageListItem>
                    <ImageListItem
                        className="flip-card-back"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ p: "1rem" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis numquam non accusantium, voluptas velit
                            facilis voluptates! Voluptatem, officia quidem
                            beatae soluta culpa, officiis labore sunt, in error
                            voluptate ad. Aspernatur hic aliquam natus dicta
                            architecto?
                        </Typography>
                    </ImageListItem>
                </Box>
            ))} */}
        </Box>
    );
};
