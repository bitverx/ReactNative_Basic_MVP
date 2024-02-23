export const navigateToHome = (navigation,CommonActions) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Bottom' }],
      })
    );
  };