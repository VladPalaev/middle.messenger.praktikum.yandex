export const chatInfoTemp = `
<li class="chat-info chat__item">
	<div class="chat-info__avatar">
		<img src="#" alt="">
	</div>

	<div class="chat-info__description">
		<div class="chat-info__user-name">{{ userName }}</div>
		<div class="chat-info__last-message">{{ lastMessage }}</div>
	</div>

	<div class="chat-info__time-count fx-col fx-space">
		<time class="chat-info__time_message" datetime="2014-09-28 19:00">{{ timeMessage }}</time>
		<span class="chat-info__count-message fx fx-c-c">{{ countMessages }}</span>
	</div>
</li>
`;
