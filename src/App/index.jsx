import React, { Fragment, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import { apiSearch } from '../api';
import { List } from '../components/List';
import { Search } from '../components/Search';

export const App = () => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const [error, setError] = useState(false);

    const search = (value) => {
        if (value.length >= 2) {
            setLoading(true);
            apiSearch({
                page: 1,
                searchValue: value
            })
                .then(
                    (response) => {
                        if (response.data.Response === 'True') {
                            setItems(response.data.Search);
                            setTotalAmount(response.data.totalResults);
                            setPage(1);
                            setSearchValue(value);
                            setError(false);
                        } else {
                            setError(true);
                        }

                        setLoading(false);
                    }
                )
                .catch(
                    () => {
                        setLoading(false);
                        setError(true);
                    }
                );
        }
    };

    const loadMore = () => {
        setLoading(true);
        apiSearch({ page: page + 1, searchValue })
            .then(
                (response) => {
                    setItems([...items, ...response.data.Search]);
                    setPage(page + 1);
                    setLoading(false);
                    setError(false);
                }
            )
            .catch(
                () => {
                    setLoading(false);
                    setError(true);
                }
            );
    };

    return (
        <Fragment>
            <Search disabled={loading} search={search}/>
            {error && (
                <Container>
                    <Alert variant="danger">Произошла ошибка!</Alert>
                </Container>
            )}
            <List disabled={loading} items={items} loadMore={loadMore} moreAvailable={items.length < totalAmount} />
            {loading && (
                <Container>
                    <Alert variant="primary">Идёт загрузка...</Alert>
                </Container>
            )}
        </Fragment>
    );
};
