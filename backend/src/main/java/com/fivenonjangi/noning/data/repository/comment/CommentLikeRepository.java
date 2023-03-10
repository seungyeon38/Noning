package com.fivenonjangi.noning.data.repository.comment;

import com.fivenonjangi.noning.data.entity.comment.CommentLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentLikeRepository extends JpaRepository<CommentLike, Long> {
    CommentLike findByComment_IdAndUser_Id(long commentId, long userId);
}
