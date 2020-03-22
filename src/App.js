import React, { Component } from 'react';

import runtimeEnv from '@mars/heroku-js-runtime-env';

import { ReactiveBase } from '@appbaseio/reactivesearch';

import {
    ReactiveList,
    ResultCard
} from '@appbaseio/reactivesearch';
const { ResultCardsWrapper } = ReactiveList;

class App extends Component {
	render() {

		// Load the env object.
    const env = runtimeEnv();
		console.log('env',env);

		return (

			<ReactiveBase
				app={env.REACT_APP_ELASTICSEARCH_INDEXNAME}
				url={env.REACT_APP_ELASTICSEARCH_URL}
				credentials={env.REACT_APP_ELASTICSEARCH_AUTH_STRING_READ}
			>
				// other components will go here.
				<div>Hello ReactiveSearch!</div>

				<code>Runtime env var example: { env.REACT_HELLO }</code>


				<ReactiveList
						componentId="results"
						dataField="name"
						size={6}
						pagination={true}
						react={{
							and: ['searchbox', 'ratingsfilter'],
						}}
						render={({ data }) => (
							<ReactiveList.ResultCardsWrapper>
								{data.map(item => (
									<ResultCard key={item._id}>
										<ResultCard.Image
											src="http://www.asfera.info/files/images/
																1_aprela/4/deloreyn.jpg"
										/>
										<ResultCard.Title
											dangerouslySetInnerHTML={{
												__html: item.name,
											}}
										/>
										<ResultCard.Description>
											{item.brand + ' ' + '*'.repeat(item.rating)}
										</ResultCard.Description>
									</ResultCard>
								))}
							</ReactiveList.ResultCardsWrapper>
						)}
					/>

			</ReactiveBase>
		);
	}
}

export default App;
