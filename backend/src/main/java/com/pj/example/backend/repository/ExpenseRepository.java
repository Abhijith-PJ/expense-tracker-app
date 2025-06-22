package com.pj.example.backend.repository;

import com.pj.example.backend.model.Expense;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}