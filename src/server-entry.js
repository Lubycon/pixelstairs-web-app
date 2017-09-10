/*
    @name: server-entry.js
    @desc: 서버 사이드 렌더링 초기화 파일 with express
    @author: Evan Moon
    @created_at: 2017.08.21
*/

/* Main application bootstrapper */
import { createApp } from './app';

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        router.push(context.url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }
            Promise.all(matchedComponents.map(Component => {
                console.log('Component => ', Component);
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    });
                }
            })).then(() => {
                /*
                 * 모든 프리 페치 후크가 해결 된 후 저장소가 렌더링 응용 프로그램에 필요한 상태로 채워집니다.
                 * 컨텍스트에 상태를 첨부하고 렌더러에`template` 옵션을 사용하면 상태는
                 * 자동으로`window .__ INITIAL_STATE__`로 직렬화되어 HTML에 주입됩니다.
                 */
                context.state = store.state;
                resolve(app);
            }).catch(reject);
        }, reject);
    });
};
