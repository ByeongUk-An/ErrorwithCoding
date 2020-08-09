import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from "../../Components/Container";
import Loading from "../../Components/Loading";

const Wrapper = styled.div`
  padding: 0 100px;
`;

const MainPresenter = ({latest,nowPlaying,popular,topRated,upcomming,error,loading}) =>
    loading ? (
        <Loading/>
    ) : (
        <Wrapper>
            {latest && latest.length > 0 && (
                <Container title="Latest Movie">
                    {latest.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Container>
            )}
            {nowPlaying && nowPlaying.length > 0 &&(
                <Container title="NowPlaying Moive">
                    {nowPlaying.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Container>
            )}
            {popular && popular.length > 0 && (
                <Container title="Popular Movie">
                    {popular.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Container>
            )}
            {topRated && topRated.length > 0 && (
                <Container title="TopRated Movie">
                    {topRated.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Container>
            )}
            {upcomming && upcomming.length > 0 && (
                <Container title="upComming Movie">
                    {upcomming.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Container>
            )}
        </Wrapper>
        )



MainPresenter.propTypes = {
    latest: PropTypes.array,
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    upcomming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}

export default MainPresenter;