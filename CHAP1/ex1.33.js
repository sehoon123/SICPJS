function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
    return a > b
        ? null_value
        : filter(a)
        ? combiner(term(a), filtered_accumulate(combiner, null_value, term,
          next(a), next, b, filter))
        : filtered_accumulate(combiner, null_value,term, next(a), next,
          next, b, filter);
}
