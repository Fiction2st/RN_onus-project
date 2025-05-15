import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    FlatList,
    ScrollView
} from "react-native";
import axios from "axios";

const Index = () => {

    const [isLoading, setIsLoading] = React.useState(true);

    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async () => {
        try{
            setIsLoading(!isLoading);
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsIm5iZiI6MTUzMzE5MjY1NS4yMDYsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv4oEQTKm9GbehUNW1O_xByTJ78x0-FFiO8_E2mts5o'
                }
            };
            const { data } = await axios.get(url, options)

            console.log("**********************************************", data.results);
            setMovies(data.results);
            setIsLoading(!isLoading);
        }catch(err){
            console.log(err)
            setIsLoading(!isLoading);
        }
    }
    useEffect(() => {
        // fetchMovies();
    }, [])

    return (
        <SafeAreaView style={{ flex:1, justifyContent :"center", alignItems : "center"}}>
            {/*<Text style={{color : "white", fontSize : 20}}>{movies.length}</Text>*/}
            <ScrollView style={{flex:1, width: "100%"}}>
            {movies && movies.map((movie,index) => (
                <View key={index}>
                    <Text style={{color :"white"}}>
                        {movie.title}
                    </Text>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                        }}
                    />
                </View>
            ))}
            </ScrollView>
            {/*<Button*/}
            {/*    onPress={fetchMovies}*/}
            {/*    title="영화 불러오기"*/}
            {/*    color="#841584"*/}
            {/*    accessibilityLabel="Learn more about this purple button"*/}
            {/*/>*/}

            {/*<View>*/}
            {/*    <Text style={{color:"white"}}>Hello World</Text>*/}
            {/*    <ActivityIndicator size="small" color="white" />*/}
            {/*    <Image*/}
            {/*        style={styles.tinyLogo}*/}
            {/*        source={{*/}
            {/*            uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
            {/*        }}*/}
            {/*    />*/}

            {/*</View>*/}
        </SafeAreaView>
    );
};

export default Index;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
